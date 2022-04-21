import React, { Component } from "react";
import JSON from "./Github.json";
import './global.css'


// class component with state example
export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      users: JSON,
    };
  }
  render() {
    return (
      <section id="gitRepo">
        <article>
          {this.state.users.map(user => {
            let { login, avatar_url, repos_url, html_url } = user;
            return (
              <div className="userGrid">
                <figure>
                  <img src={avatar_url} alt={login} />
                    </figure>
                    <main>
                        <h2>{login}</h2>
                        <p>repos{repos_url}</p>
                        <p>
                            <a href={html_url} target="_blank"> View Profile</a>
                        </p>
                    </main>
              </div>
            );
          })}
        </article>
      </section>
    );
  }
}
