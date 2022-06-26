import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage,
  unfollow, toggleFollowingProgress,
  getUsers, getPageChenged
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers, getPageChenged})
)(UsersContainer)