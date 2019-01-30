import React, { Component } from 'react'

export default class Icon extends Component {
  static defaultProps = {
    color: 'black',
  }
  render() {
    switch (this.props.name) {
      case 'close':
        return (
          <svg
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 31.11 31.11"
            enableBackground="0 0 31.11 31.11"
          >
            <rect
              width="18"
              height="18"
              x="3"
              y="3"
              class="primary"
              rx="2"
              fill="none"
              stroke={this.props.color}
            />
            <path
              fill={this.props.color}
              d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"
            />
          </svg>
        )
      case 'menu':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 31.11 31.11"
            enableBackground="0 0 31.11 31.11"
          >
            >
            <path
              class="secondary"
              fill-rule="evenodd"
              fill={this.props.color}
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        )
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 31.11 31.11"
            enableBackground="0 0 31.11 31.11"
          >
            >
            <path
              class="secondary"
              fill-rule="evenodd"
              fill={this.props.color}
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        )
    }
  }
}
