/** @odoo-module **/
import { Component, useState } from "@odoo/owl";

export class Card extends Component {
    static template = "awesome_owl.card";

    setup() {
        this.state = useState({ show: true });
    }

    toogle_show_content() {
        this.state.show = !this.state.show;
    }

}