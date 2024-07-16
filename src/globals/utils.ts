export default {
    generateUniqueID () {
        return Date.now() + Math.random().toString(36).substring(2)
    }
}