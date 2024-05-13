import { handleActions } from "redux-actions";
import { ACTIVITYLIST } from "@actions/hospitalList";

const initState = {
};

export default handleActions(
    {
        [ACTIVITYLIST.RESET]: () => {
            return {
                ...initState,
            };
        },

        [ACTIVITYLIST.SETSTORES]: (state: any, { payload }) => {
            return {
                ...state,
                ...payload,
            };
        },

        [ACTIVITYLIST.ORGLIST + "_FULFILLED"]: (state: any, { payload }) => {
            

            return {
                ...state,
                
            };
        },
    },
    initState
);
