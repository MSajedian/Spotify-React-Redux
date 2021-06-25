import React from "react";
import AlbumCard from "./AlbumCard";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getDataAction } from "../actions";

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  getData: (fetchType, query) => dispatch(getDataAction(fetchType, query))
})
class Artist extends React.Component {

  componentDidMount = async () => {
    let artistId = this.props.match.params.id;
    this.props.getData("artist", artistId)
  };

  render() {
    return (
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="mb-3">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <div>TRENDING</div>
            <div>PODCAST</div>
            <div>MOODS AND GENRES</div>
            <div>NEW RELEASES</div>
            <div>DISCOVER</div>
          </div>
        </Row>

        <Row>
          <div className="col-12 col-md-10 col-lg-10 mt-5">
            <h2 className="titleMain">{this.props.artist.artist.name}</h2>
            <div id="followers">{this.props.artist.artist.nb_fan} followers</div>
            <div
              className="d-flex justify-content-center"
              id="button-container"
            >
              <button
                className="btn btn-success mr-2 mainButton"
                id="playButton"
              >
                PLAY
              </button>
              <button
                className="btn btn-outline-light mainButton"
                id="followButton"
              >
                FOLLOW
              </button>
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <Col xs={10}>
            <div className="mt-4 d-flex justify-content-start">
              <h2 className="text-white font-weight-bold">Tracks</h2>
            </div>
            <div className="pt-5 mb-5">
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {this.props.artist.songs?.map((song) => (
                  <AlbumCard song={song} key={song.id} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);

