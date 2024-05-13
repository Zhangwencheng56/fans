import { createAction } from "redux-actions";


export const ACTIVITYLIST = {
    RESET: 'RESET',
    ORGLIST: 'ORGLIST',
    SETSTORES: 'SETSTORES',
};


export default {
    // 重置数据
    setReset: createAction(ACTIVITYLIST.RESET, () => {
        return {};
    }),

    setStores: createAction(ACTIVITYLIST.SETSTORES, (params: any) => {
        return {
            ...params,
        };
    }),

    // 机构列表
    getOrgList: createAction(
        ACTIVITYLIST.ORGLIST,
        (params: any) => {

        },
        (res: any) => res
    ),
};
