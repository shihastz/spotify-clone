export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    //token: "BQDuiHHGrvLhp7LHXJYNP9RCjSNQGgSfJN6z1SyjQeAkgRN4nCwUJHugirbdimQ0W7Xf1-GompCl8G_dT8d291dN5BHbvHy8pFLHRLK-oAhY0QMSU0O4ja2m5QhaqgHTWPVdzqeZ0ZD5U0iBH0Dau7kON2Q1eNA"
};


export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_PLAYLISTS":
                return {
                    ...state,
                    playlists: action.playlists,
                };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
    
        default:
            return state;
    }
}