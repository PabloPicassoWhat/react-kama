import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage,
  unfollow, toggleFollowingProgress,
  requestUsers, getPageChenged
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
  getCurrentPage, getFollowingInProgress, getIsFetching,
  getPageSize, getTotalUsersCount, getUsersSelector,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getPageChenged(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
      {this.props.isFetching
        ? <Preloader />
        : <Users totalUsersCount={this.props.totalUsersCount}
                 pageSize={this.props.pageSize}
                 currentPage={this.props.currentPage}
                 onPageChanged={this.onPageChanged}
                 users={this.props.users}
                 unfollow={this.props.unfollow}
                 follow={this.props.follow}
                 toggleFollowingProgress={this.props.toggleFollowingProgress}
                 followingInProgress={this.props.followingInProgress}
        />
      }
    </>
  }

}

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
};

export default compose(
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers, getPageChenged})
)(UsersContainer)