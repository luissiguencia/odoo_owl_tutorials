/** @odoo-module **/

import { Component, onWillStart, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { DashboardItem } from "./dashboard_item/dashboard_item";
import { PieChartCard } from "./pie_chart_card/pie_chart_card";

class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";
    static components = {
        Layout,
        DashboardItem,
        PieChartCard
    }

    setup() {
        //this.myService = useService("myService");
        // do something with value
        this.action = useService("action");
        this.display = {
            controlPanel: {},
        };
        this.rpc = useService("rpc");
        this.data = useState(useService("awesome_dashboard.statistics"));
        this.statistics = useService("awesome_dashboard.statistics");

        onWillStart(async () => {
            this.statistics = await this.statistics.loadStatistics();
        });
        /*
        onWillStart(async () => {
            const result = await this.rpc("/awesome_dashboard/statistics");
            console.log(result);
            this.data = result
        })*/
    }

    openCustomers() {
        this.action.doAction("base.action_partner_form")
    }

    openLeads() {
        this.action.doAction({
            type: 'ir.actions.act_window',
            name: 'List All Leads',
            target: 'current',
            res_model: 'crm.lead',
            views: [
                [false, 'form'],
                [false, 'list'],
            ],
        });
    }

}

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
