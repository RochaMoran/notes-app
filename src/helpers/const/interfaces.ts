export interface appState {
    note: {
        id: string,
        title: string;
        description: string;
        create_time: string;
        priority: string;
    },
    itemRoute: {
        path: string,
        element: Function
    },
    routes: {
        auth: Array<appState["itemRoute"]>,
        root: Array<appState["itemRoute"]>
    }
}