/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";
import { useAutofocus } from "../utils";

export class TodoList extends Component {
    static template = 'awesome_owl.todolist';

    setup() {
        /*this.todos = useState([
            { id: 1, description: "buy milk", isCompleted: true },
            { id: 2, description: "buy cokies", isCompleted: false },
            { id: 3, description: "buy met", isCompleted: false },
        ]);*/
        this.id = 1;
        this.todos = useState([]);
        useAutofocus("input");
    }

    addtodo(ev) {
        if (ev.keyCode === 13 && ev.target.value != "") {
            this.todos.push({
                'id': this.id++,
                'description': ev.target.value,
                'isCompleted': false,
            })
            ev.target.value = "";
        }
    }

    toggleState(id) {
        const todo = this.todos.find((todo) => todo.id == id)
        if (todo) {
            todo.isCompleted = !todo.isCompleted;
        }
    }



    static components = { TodoItem }
}