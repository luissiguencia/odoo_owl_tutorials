/** @odoo-module **/
import { Component, useState } from "@odoo/owl";

export class TodoItem extends Component {

    static template = "awesome_owl.todoitem";


    onChange() {
        this.props.toggleState(this.props.todo.id);
    }

    onClick() {
        this.props.removeTodo(this.props.todo.id);
    }


}