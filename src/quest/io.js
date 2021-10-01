export default {

    loadRoutes() {
        let presetJSON = window.localStorage.getItem("routes") || "[]";
        let presetRoutes = JSON.parse(presetJSON);

        console.log(`IO: Found ${presetRoutes.length} routes`);

        return presetRoutes;
    },

    saveRoute(name, jp, earlyEscape, solvaring, zelse, spiritRows) {
        let routes = this.loadRoutes();
        let newRoute = {
            name, 
            solvaring,
            zelse,
            jp, 
            earlyEscape, 
            spirits: spiritRows.map(row => row.index)
        };

        let currentIndex = this.getRouteIndex(name);
        if (currentIndex >= 0)
            routes[currentIndex] = newRoute;
        else
            routes.push(newRoute);
        
        let presetJSON = JSON.stringify(routes);
        window.localStorage.setItem("routes", presetJSON);

        return true;
    },

    getRouteIndex(name) {
        let routes = this.loadRoutes();
        for (let k=0; k<routes.length; k++) {
            let iterRoute = routes[k];
            if (iterRoute.name == name) {
                return k;
            }
        }

        return -1;
    },

    deleteRoute(name) {
        let routeIndex = this.getRouteIndex(name);
        if (routeIndex <= -1) 
            return false;
        
        let routes = this.loadRoutes();
        routes.splice(routeIndex, 1);

        let presetJSON = JSON.stringify(routes);
        window.localStorage.setItem("routes", presetJSON);

        return true;
    }
}
