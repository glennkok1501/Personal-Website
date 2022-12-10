const ImgView = ({img}) => {
    return (
        <div className="text-center">
            <img src={img} alt='project_img' className="img-fluid" />
        </div>
     );
}
 
export default ImgView;