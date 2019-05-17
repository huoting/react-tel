import React, { Component } from 'react';

import { Table, Button } from 'antd'
import './ListCon.scss'

class ListCon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: 1,
          Name: '设计大神',
          Age: 15,
          tags: 45
        }
      ],
      loading: false
    };
  }
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        render: text => <span>{text}</span>
      },
      {
        title: 'Age',
        dataIndex: 'Age',
        key: 'Age'
      },
      {
        title: 'Tags',
        dataIndex: 'Tags',
        key: 'Tags',
        render: tags => (
          <span>
            <Button type="primary">提交</Button>
          </span>
        )
      }
    ]

    return (
      <div className="ListCon">
        <Table
          columns={columns}
          dataSource={this.state.data}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
export default ListCon;
