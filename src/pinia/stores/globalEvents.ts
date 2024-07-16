import { defineStore } from 'pinia'

interface PreviewDialog {
  isVisible: boolean;
  data: Record<string, any>;
}

interface AlertDialog {
  show: boolean;
  type: string;
  title: string;
  messages: string[];
  onClose: {
    callback: (() => void) | null;
  };
}

interface State {
  mainLoader: boolean;
  previewDialog: PreviewDialog;
  alertDialog: AlertDialog;
}

export const useGlobalEventsStore = defineStore({
  id: 'globalEvents',
  state: (): State => ({
    mainLoader: false,
    previewDialog: {
      isVisible: false,
      data: {}
    },
    alertDialog: {
      show: false,
      type: '',
      title: '',
      messages: [],
      onClose: {
        callback: null
      }
    }
  }),

  getters: {
    getMainLoader(state): boolean {
      return state.mainLoader;
    }
  },

  actions: {
    showMainLoader() {
      this.mainLoader = true;
    },
    hideMainLoader() {
      this.mainLoader = false;
    },
    showPreviewDialog(params: Record<string, any>) {
      this.previewDialog = {
        isVisible: true,
        data: params
      };
    },
    hidePreviewDialog() {
      this.previewDialog = {
        isVisible: false,
        data: {}
      };
    },
    showAlertDialog(params: { title?: string; messages: string[]; type?: string; onClose?: { callback: (() => void) | null } }) {
      const newAlertDialog: AlertDialog = {
        show: true,
        title: params.title ?? '',
        messages: params.messages,
        type: params.type ?? 'default',
        onClose: params.onClose ?? { callback: null }
      };

      switch (params.type) {
        case 'error':
          newAlertDialog.title = 'Error';
          break;
        default:
          newAlertDialog.title = 'Success';
      }

      this.alertDialog = newAlertDialog;
    },
    hideAlertDialog() {
      if (this.alertDialog.onClose.callback) {
        this.alertDialog.onClose.callback();
      }

      this.alertDialog = {
        show: false,
        title: '',
        messages: [],
        type: 'default',
        onClose: {
          callback: null
        }
      };
    }
  }
});
