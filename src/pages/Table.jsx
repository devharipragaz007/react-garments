import React, {Component} from 'react';

import './datatables.css';

// const $ = require('jquery');
// $.DataTable = require('datatables.net');

const columns = [
    {
        title: 'Name',
        width: 120,
        data: 'name'
    },
    {
        title: 'Nickname',
        width: 180,
        data: 'nickname'
    },
];

// function reloadTableData(rows) {
//     const table = $('.data-table-wrapper').find('table').DataTable();
//     table.clear();
//     table.rows.add(rows);
//     table.draw();
// }

// function updateTable(rows) {
//     const table = $('.data-table-wrapper').find('table').DataTable();
//     let dataChanged = false;
//     table.rows().every(function () {
//         const oldNameData = this.data();
//         const newNameData = rows.find((nameData) => {
//             return nameData.name === oldNameData.name;
//         });
//         if (oldNameData.nickname !== newNameData.nickname) {
//             dataChanged = true;
//             this.data(newNameData);
//         }
//        return true;
//     });

//     if (dataChanged) {
//         table.draw();
//     }
// }


class Table extends Component {
    // componentDidMount() {
    //     $(this.refs.main).DataTable({
    //         dom: '<"data-table-wrapper"t>',
    //         data: this.props.rows,
    //         columns : this.props.columns,
    //         ordering: false
    //     });
    // }

    // componentWillUnmount(){
    //    $('.data-table-wrapper').find('table').DataTable().destroy(true);
    // }

    // shouldComponentUpdate(nextProps) {
    //     if (nextProps.rows.length !== this.props.rows.length) {
    //         reloadTableData(nextProps.rows);
    //     } else {
    //         updateTable(nextProps.rows);
    //     }
    //     return false;
    // }



    render() {
        return (
            <div>
                <table ref="main" />
            </div>);
    }
}

// Table.PropTypes = {
//     names: React.PropTypes.array
// };

export default Table;