/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../trips/Trip.scss';

class Header extends Component {
  render() {
    return (
      <div>

        <header>

          <nav>
            <ul>
              <li className="request">all request</li>
              <li><a href="">All</a></li>
              <input type="number" className="numbers" />
              <li><a href="">Pending</a></li>
              <li><a href="">Past</a></li>
            </ul>
          </nav>
          <div className="searching">
            <div className="dropdown">
              <select name="Search">
                <option defaultValue="DEFAULT">Search By</option>
              </select>
            </div>
            <div>
              <form>
                <input type="text" placeholder="serch" />

                <input type="submit" value="Go" className="gobtn" />
              </form>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
