import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TooltipWrapper from '../../components/TooltipWrapper';
import { t } from '../../locales';

const propTypes = {
  dashboardId: PropTypes.number.isRequired,
  fetchPublished: PropTypes.func,
  savePublished: PropTypes.func,
  isPublished: PropTypes.bool.isRequired,
};

export default class PublishedStatus extends React.Component {
  componentDidMount() {
    this.props.fetchPublished(this.props.dashboardId);
  }

  onClick(e) {
    e.preventDefault();
    this.props.savePublished(this.props.dashboardId, !this.props.isPublished);
  }

  render() {
    const iconClassNames = cx('fa', {
      'fa-eye': this.props.isPublished,
      'fa-eye-slash': !this.props.isPublished,
    });

    return (
      <TooltipWrapper
        label="publish/unpublish"
        tooltip={t('Click to publish/unpublish this dashboard')}
      >
        <a
          href="#"
          onClick={this.onClick.bind(this)}
          className="publish-icon"
        >
          <i className={iconClassNames} />
        </a>
      </TooltipWrapper>
    );
  }
}

PublishedStatus.propTypes = propTypes;
