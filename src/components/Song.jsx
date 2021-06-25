import { Component } from "react";
import { connect } from "react-redux";
import { addTrackToIsPlayingAction } from "../actions";
import { addToFavouriteTracksAction } from "../actions";
import { removeFromFavouriteTracksAction } from "../actions";
import { withRouter } from "react-router-dom";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  addToIsPlaying: (track) => dispatch(addTrackToIsPlayingAction(track)),
  addToFavouriteTracks: (track) => dispatch(addToFavouriteTracksAction(track)),
  removeFromFavouriteTracks: (track) => dispatch(removeFromFavouriteTracksAction(track)),
})

class Song extends Component {
  componentDidUpdate() {
    let currentTracks = this.props.track.id
    let favouriteTracks = this.props.user.favouriteTracks
    let filterdTrack = this.props.user.favouriteTracks.filter(elem => elem.id === this.props.track.id)
    console.log('currentTracks:', currentTracks)
    console.log('favouriteTracks:', favouriteTracks)
    console.log('filterdTrack:', filterdTrack)
    console.log('-------------------------------')
  }

  render() {
    return (
      <>
        <div className="py-3 trackHover" >
          <span className="card-like" style={{ color: "white" }} >
            {this.props.user.favouriteTracks.filter(elem => elem.id === this.props.track.id).length !== 0 ?
              <AiFillHeart onClick={() => { this.props.removeFromFavouriteTracks(this.props.track) }} />
              :
              <AiOutlineHeart onClick={() => { this.props.addToFavouriteTracks(this.props.track) }}/>
            }
          </span>
          <span className="card-title trackHover px-3" style={{ color: "white" }} onClick={() => { this.props.addToIsPlaying(this.props.track) }}>
            {this.props.track.title}
          </span>

          <small className="duration" style={{ color: "white" }}>
            {Math.floor(parseInt(this.props.track.duration) / 60)}:
            {parseInt(this.props.track.duration) % 60 < 10
              ? "0" + (parseInt(this.props.track.duration) % 60)
              : parseInt(this.props.track.duration) % 60}
          </small>
        </div>
      </>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Song));
