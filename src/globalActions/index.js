import EventBus, { ACTIONS } from "../EventBus/index";

export default {
    showSnackbar: (message) => {
        EventBus.$emit(ACTIONS.SNACKBAR, message);
    }
}