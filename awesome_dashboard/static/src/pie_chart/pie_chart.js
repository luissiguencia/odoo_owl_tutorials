/** @odoo-module **/
import { Component, useState, onWillStart, useRef, onWillUnmount, onMounted } from '@odoo/owl';
import { getColor } from "@web/core/colors/colors";
import { loadJS } from '@web/core/assets'

export class PieChart extends Component {

    static template = "awesome_dashboard.PieChart";


    static props = {
        label: String,
        data: Object,
    }

    setup() {
        this.canvaRef = useRef('canvas_panel')
        onWillStart(() => loadJS(["/web/static/lib/Chart/Chart.js"]));
        onMounted(() => {
            this.renderChart();
        });
        onWillUnmount(() => {
            this.chart.destroy();
        });
    }

    renderChart() {
        const labels = Object.keys(this.props.data)
        const data = Object.values(this.props.data)
        const color = labels.map((_, index) => getColor(index));
        const ctx = this.canvaRef.el
        this.chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'pie',
            // The data for our dataset
            data: {
                labels: labels,
                datasets: [
                    {
                        label: this.props.label,
                        data: data,
                        backgroundColor: color,
                    },
                ],
            },
        });
    }
}