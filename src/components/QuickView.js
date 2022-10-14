import "./QuickView.scss";
import CancelIcon from "@material-ui/icons/Cancel";

function QuickView({ bannerStyle, movie, popup, popupStatut}) {
  return(
    <div className={`quickView ${popupStatut && "open"}`}>
    <div className="quickView__banner" style={bannerStyle}>
    <div className="quickView__content">
    <h3 className="quickView__titre" data-testid="quick-movie-name">{movie?.title || movie?.original_title || movie?.name}</h3>
    <p className="">{movie?.overview}</p>
    </div>
    <button className="quickView__close" onClick={popup}><CancelIcon font-size="large"/></button>
    </div>
    </div>
  )
}

export default QuickView
