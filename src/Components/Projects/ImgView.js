const ImgView = ({img}) => {
    return (
        <div className="text-center">
            <img src={img} alt='project_img' className="img-fluid rounded" />
        </div>
     );
}
 
export default ImgView;