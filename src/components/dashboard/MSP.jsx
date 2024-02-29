import React from "react";
import firstimage from "../../images/most-liked-instagram-posts.png";
import "./msp.css";

function MSP() {
  return (
    <div className="card">
      <h5 className="card-header">Top 20 Most Liked Instagram Posts in 2023</h5>
      <div className="card-body">
        <div className="form-group">
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <div className="article">
                    <div className="article__content">
                      <p>
                        Gradually, despite everything, the number of users
                        joining the Instagram social network is increasing all
                        over the globe. The introduction of expanded
                        functionality, improving the quality of content, and the
                        constant development of the platform leads to people of
                        all ages becoming active users of Instagram.
                      </p>
                      <p>
                        Athletes, actors, and other celebrities actively engage
                        with their fans, and their posts often generate strong
                        reactions from followers, racking up millions of likes.
                        This is most often associated with major world events,
                        such as winning the World Cup or other memorable
                        moments.
                      </p>
                      <div className="highlights">
                        <p>
                          <strong>Highlights:</strong>
                        </p>
                        <ul>
                          <li>
                            14 out of 20 posts with the highest number of likes
                            belong to soccer players Lionel Messi and Cristiano
                            Ronaldo. Thus, the athletes occupy 70% of the rating
                            with a total of more than 500 million likes.
                          </li>
                          <li>
                            Only 4 posts published in 2023 were included in the
                            rating. All other posts are of earlier dates. The
                            oldest post is dated 2018.
                          </li>
                        </ul>
                      </div>
                      <p style={{ textAlign: "center" }}>
                        <img
                          src={firstimage}
                          alt="Most Liked Instagram Posts 2023"
                        />
                      </p>
                      <p>
                        The table below shows the most-liked posts by number of
                        likes on the Instagram social network (statistics data
                        current as of December 9, 2023).
                      </p>
                      <table>
                        <tbody>
                          <tr>
                            <th>&nbsp;</th>
                            <th>Account</th>
                            <th>Post Description</th>
                            <th>Number of Likes</th>
                            <th>Number of Comments</th>
                            <th>Average Number of Likes</th>
                            <th>Date Posted</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              Lionel Messi
                              <br />
                              <a
                                className="username"
                                href="/leomessi/"
                                target="_blank"
                              >
                                @leomessi
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Lionel Messi Lifting The World Cup Trophy
                              </a>
                            </td>
                            <td>75,623,950</td>
                            <td>2,089,992</td>
                            <td>3,392,206</td>
                            <td>12/18/2022</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              Chris Godfrey
                              <br />
                              <a
                                className="username"
                                href="/world_record_egg/"
                                target="_blank"
                              >
                                @world_record_egg
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                A Plain Old Egg
                              </a>
                            </td>
                            <td>60,192,823</td>
                            <td>3,922,361</td>
                            <td>60,192,823</td>
                            <td>01/04/2019</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              Lionel Messi
                              <br />
                              <a
                                className="username"
                                href="/leomessi/"
                                target="_blank"
                              >
                                @leomessi
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Messi Sleeping With FIFA Trophy
                              </a>
                            </td>
                            <td>54,703,978</td>
                            <td>704,599</td>
                            <td>3,392,206</td>
                            <td>12/20/2022</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>
                              Cristiano Ronaldo
                              <br />
                              <a
                                className="username"
                                href="/cristiano/"
                                target="_blank"
                              >
                                @cristiano
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Ronaldo and Messi Playing Chess
                              </a>
                            </td>
                            <td>42,750,606</td>
                            <td>518,120</td>
                            <td>7,617,574</td>
                            <td>11/19/2022</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              Lionel Messi
                              <br />
                              <a
                                className="username"
                                href="/leomessi/"
                                target="_blank"
                              >
                                @leomessi
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Messi on an Airplane With FIFA Trophy
                              </a>
                            </td>
                            <td>41,974,198</td>
                            <td>489,980</td>
                            <td>3,392,206</td>
                            <td>12/19/2022</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>
                              Liz 6<br />
                              <a
                                className="username"
                                href="/jiangzhibin24/"
                                target="_blank"
                              >
                                @jiangzhibin24
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Reel of a sunset
                              </a>
                            </td>
                            <td>34,529,133</td>
                            <td>117,000</td>
                            <td>72,959</td>
                            <td>08/05/2023</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>
                              Cristiano Ronaldo
                              <br />
                              <a
                                className="username"
                                href="/cristiano/"
                                target="_blank"
                              >
                                @cristiano
                              </a>
                              <br />
                              Al Nassr FC
                              <br />
                              <a
                                className="username"
                                href="/alnassr/"
                                target="_blank"
                              >
                                @alnassr
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Cristiano Ronaldo Joins Al Nassr FC
                              </a>
                            </td>
                            <td>34,430,728</td>
                            <td>1,310,984</td>
                            <td>&nbsp;</td>
                            <td>12/30/2022</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>
                              Lionel Messi
                              <br />
                              <a
                                className="username"
                                href="/leomessi/"
                                target="_blank"
                              >
                                @leomessi
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Messi Celebrating Victory in Argentina
                              </a>
                            </td>
                            <td>34,425,429</td>
                            <td>258,908</td>
                            <td>3,392,206</td>
                            <td>12/21/2022</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>
                              Cristiano Ronaldo
                              <br />
                              <a
                                className="username"
                                href="/cristiano/"
                                target="_blank"
                              >
                                @cristiano
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Cristiano After Portugal’s Elimination
                              </a>
                            </td>
                            <td>34,180,954</td>
                            <td>1,589,540</td>
                            <td>7,617,574</td>
                            <td>12/11/2022</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>
                              Lionel Messi
                              <br />
                              <a
                                className="username"
                                href="/leomessi/"
                                target="_blank"
                              >
                                @leomessi
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Ronaldo and Messi Playing Chess, Part 2
                              </a>
                            </td>
                            <td>32,859,604</td>
                            <td>338,302</td>
                            <td>3,392,206</td>
                            <td>11/19/2022</td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>
                              Cristiano Ronaldo
                              <br />
                              <a
                                className="username"
                                href="/cristiano/"
                                target="_blank"
                              >
                                @cristiano
                              </a>
                              <br />
                              Georgina Rodríguez
                              <br />
                              <a
                                className="username"
                                href="/georginagio/"
                                target="_blank"
                              >
                                @georginagio
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Ronaldo Is Having Twins
                              </a>
                            </td>
                            <td>32,409,322</td>
                            <td>473,786</td>
                            <td>&nbsp;</td>
                            <td>10/28/2021</td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>
                              Cristiano Ronaldo
                              <br />
                              <a
                                className="username"
                                href="/cristiano/"
                                target="_blank"
                              >
                                @cristiano
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Post in Remembrance of Pelé
                              </a>
                            </td>
                            <td>32,322,352</td>
                            <td>230,618</td>
                            <td>7,617,574</td>
                            <td>12/29/2022</td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td>
                              XXXTentacion
                              <br />
                              <a
                                className="username"
                                href="/xxxtentacion/"
                                target="_blank"
                              >
                                @xxxtentacion
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Final Post Before His Death
                              </a>
                            </td>
                            <td>32,350,267</td>
                            <td>10,794,175</td>
                            <td>32,350,267</td>
                            <td>05/19/2018</td>
                          </tr>
                          <tr>
                            <td>14</td>
                            <td>
                              Lionel Messi
                              <br />
                              <a
                                className="username"
                                href="/leomessi/"
                                target="_blank"
                              >
                                @leomessi
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                After 2022 FIFA World Cup match against Croatia
                              </a>
                            </td>
                            <td>29,715,806</td>
                            <td>443,533</td>
                            <td>3,392,206</td>
                            <td>12/14/2022</td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td>
                              Cristiano Ronaldo
                              <br />
                              <a
                                className="username"
                                href="/cristiano/"
                                target="_blank"
                              >
                                @cristiano
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Cristiano Ronaldo Joined to the Al Nassr FC
                              </a>
                            </td>
                            <td>27,933,567</td>
                            <td>274,533</td>
                            <td>7,617,574</td>
                            <td>01/03/2023</td>
                          </tr>
                          <tr>
                            <td>16</td>
                            <td>
                              Cristiano Ronaldo
                              <br />
                              <a
                                className="username"
                                href="/cristiano/"
                                target="_blank"
                              >
                                @cristiano
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Post of friendly between PSG and Riyadh XI
                              </a>
                            </td>
                            <td>27,873,926</td>
                            <td>241,942</td>
                            <td>7,617,574</td>
                            <td>01/19/2023</td>
                          </tr>
                          <tr>
                            <td>17</td>
                            <td>
                              Zendaya
                              <br />
                              <a
                                className="username"
                                href="/zendaya/"
                                target="_blank"
                              >
                                @zendaya
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Happy Birthday Post to Tom Holland
                              </a>
                            </td>
                            <td>26,304,255</td>
                            <td>219,358</td>
                            <td>6,184,280</td>
                            <td>06/01/2022</td>
                          </tr>
                          <tr>
                            <td>18</td>
                            <td>
                              Lionel Messi
                              <br />
                              <a
                                className="username"
                                href="/leomessi/"
                                target="_blank"
                              >
                                @leomessi
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Post in Remembrance of Pelé
                              </a>
                            </td>
                            <td>26,033,392</td>
                            <td>136,408</td>
                            <td>3,392,206</td>
                            <td>12/29/2022</td>
                          </tr>
                          <tr>
                            <td>19</td>
                            <td>
                              Selena Gomez
                              <br />
                              <a
                                className="username"
                                href="/selenagomez/"
                                target="_blank"
                              >
                                @selenagomez
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Violet Chemistry
                              </a>
                            </td>
                            <td>25,870,759</td>
                            <td>353,876</td>
                            <td>5,551,897</td>
                            <td>03/14/2023</td>
                          </tr>
                          <tr>
                            <td>20</td>
                            <td>
                              Tom Holland
                              <br />
                              <a
                                className="username"
                                href="/tomholland2013/"
                                target="_blank"
                              >
                                @tomholland2013
                              </a>
                            </td>
                            <td>
                              <a href="#" target="_blank">
                                Meme "Spider-Man pointing"
                              </a>
                            </td>
                            <td>25,205,773</td>
                            <td>136,318</td>
                            <td>4,208,173</td>
                            <td>02/23/2022</td>
                          </tr>
                        </tbody>
                      </table>
                      <h2>1. Lionel Messi Lifting The World Cup Trophy</h2>
                      <p>
                        <em>Date: December 18, 2022</em>
                        <br />
                        <em>Number of likes: 75.6 million</em>
                      </p>
                      <p>
                        This is the most popular post on Instagram at the end of
                        2023, consisting of ten photographs that will forever go
                        down in football history. In the description of the
                        post, Messi thanks his family, loved ones and everyone
                        who supported him. Together with the team, Messi
                        rejoices at the victory of the Argentina national team
                        at the 2022 FIFA World Cup in Qatar. The final match
                        turned out to be very tense – both Argentina and France
                        scored three goals. The result of the match was
                        determined by a series of post-match penalties.
                      </p>
                      <p>
                        The last time Argentina won the FIFA World Cup was in
                        1986. Messi wrote that for a long time he could not
                        believe that his old dream had come true and the
                        long-awaited victory had become a reality. Even though
                        the championship ended at the end of 2022, the post is
                        still gradually gaining likes.
                      </p>
                      <h2>2. A Plain Old Egg</h2>
                      <p>
                        <em>Date: January 4, 2019</em>
                        <br />
                        <em>Number of likes: 60.2 million</em>
                      </p>
                      <p>
                        This post is notable for its simplicity, as it features
                        a simple chicken egg. The goal of the post was
                        explicitly stated in the post description and was to
                        break Kylie Jenner's record of more than 18 million
                        reactions to a post with a picture of her daughter
                        Stormi.
                      </p>
                      <p>
                        Thanks to the large number of reposts on various social
                        networks, including Twitter, the goal was achieved very
                        quickly. For almost 4 years, the post was the most
                        popular post on the social network Instagram until Messi
                        displaced it from the top spot in the rankings. The
                        @world_record_egg account belongs to Chris Godfrey, an
                        advertising agency employee living in London.
                      </p>
                      <h2>3. Messi Sleeping With FIFA Trophy</h2>
                      <p>
                        <em>Date: December 20, 2022</em>
                        <br />
                        <em>Number of likes: 54.7 million</em>
                      </p>
                      <p>
                        This post is a logical continuation of the first post
                        from the rankings, where Messi lifts the World Cup
                        trophy in Qatar. Having put in an incredible amount of
                        effort, Messi and his team can deservedly enjoy the
                        victory. It's time for a little rest, but Messi decided
                        not to let go of the much-anticipated award.
                      </p>
                      <p>
                        The post consists of three photos, where the footballer
                        sleeps in bed in the arms of the World Cup and
                        incredibly happy with the result of the championship in
                        Qatar. The trophy consists of pure gold and is valued at
                        about 20 million dollars.
                      </p>{" "}
                    </div>
                  </div>{" "}
                </div>
              </div>{" "}
            </div>

            {/* <span className="input-group-prepend">
            <span className="input-group-text">@</span>
          </span> */}
            {/* <input
            type="text"
            placeholder="Username"
            className="form-control"
            defaultValue=""
          />
          <div className="input-group-append">
            <button type="button" className="btn btn-primary">
              Search!
            </button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MSP;
