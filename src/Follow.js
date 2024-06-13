import React, { Component } from 'react';
import './Follow.css';

class GitHubFollowingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      following: []
    };
  }

  componentDidMount() {
    this.fetchFollowing();
  }

  fetchFollowing = async () => {
    try {
      const response = await fetch('https://api.github.com/users/defunkt/following');
      if (!response.ok) {
        throw new Error('Failed to fetch following');
      }
      const data = await response.json();
      this.setState({ following: data.slice(0, 5) }); // Get the first five avatars
    } catch (error) {
      console.error('Error fetching following:', error);
    }
  };

  render() {
    const { following } = this.state;
    return (
      <div className="following-list">
        <h1>GitHub Following List</h1>
        <div>
          {following.map((user) => (
            <div className="user-container" key={user.id}>
              <p>{user.login}</p>
              <img src={user.avatar_url} alt={user.login} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GitHubFollowingList;
