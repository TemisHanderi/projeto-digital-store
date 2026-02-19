import "./Section.css"

const Section = ({title, textAlign="left", link, children}) => {

    let align;

    if(textAlign === "center"){
        align = "center";
    }else{
        align = "left";
    }

    return (
            <div className="section-body">
                {(title || link) && (<div className="section-header">

                    {title && (<h2 className={`section-title ${align}`}>{title}</h2>)}
                    {link && (<a href={link.href} className="section-link">{link.text}</a>)}

                </div> )}

                <div className="section-content">
                    {children}
                </div>

            </div>
    );
}
 
export default Section;