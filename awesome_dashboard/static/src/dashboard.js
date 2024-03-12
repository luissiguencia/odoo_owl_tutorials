/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";

class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";
    static components = {
        Layout
    }

    setup() {
        this.myService = useService("myService");
        // do something with value
     }
    
}

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
