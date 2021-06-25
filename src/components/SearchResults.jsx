import React from "react";
import AlbumCard from "./AlbumCard";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getDataAction } from "../actions";

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  getData: (fetchType, query) => dispatch(getDataAction(fetchType, query))
})

class SearchResults extends React.Component {
  

  render() {
    return (
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row>
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <div>TRENDING</div>
            <div>PODCAST</div>
            <div>MOODS AND GENRES</div>
            <div>NEW RELEASES</div>
            <div>DISCOVER</div>
          </div>
        </Row>
          <Row>
            <Col xs={10}>
              <div id="searchResults">
                <h2>Search Results</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                  {this.props.searchResult.songs.map((song) => (
                    <AlbumCard song={song} key={song.id} />
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
      </Col>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
