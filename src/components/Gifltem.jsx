import  PropTypes from "prop-types"
export const Gifltem = ({title, url, id}) => {


  return (
    <div className="card">
      <img  src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}


Gifltem.PropTypes={
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
}