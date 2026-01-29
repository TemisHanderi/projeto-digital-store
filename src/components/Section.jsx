import styled from "styled-components";

const Section = ({title, textAlign="left", link, children}) => {

    const SectionStyled = styled.section`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

        :root{
            --primary: #C92071;
            --secondary: #B5B6F2;
            --tertiary: #991956;
            --error: #EE4266;
            --success: #52CA76;
            --warning: #F6AA1C;

            /* Grayscale */
            --dark-gray: #1F1F1F;
            --dark-gray-2: #474747;
            --dark-gray-3: #666666;
            --light-gray: #8F8F8F;
            --light-gray-2: #CCCCCC;
            --light-gray-3: #F5F5F5;
            --white: #FFFFFF;
        }

        .section-body{
            width:100%;
            padding-left: 150px;
            padding-right: 150px;
            margin-top: 50px;
            margin-bottom: 100px;
            font-family: 'Inter', sans-serif;
        }

        .section-header{
            display:flex;
            align-items:center;
            position: relative;
            margin-bottom: 24px;
        }

        .section-title{
            color: var(--dark-gray-2);
            font-size: 24px;
            font-weight: bold;
            margin:0;
        }

        .section-title.left{
            text-align:left;
        }

        .section-title.center{
            position: absolute;
            left:50%;
            transform: translateX(-50%);
            text-align:center;
        }

        .section-link{
            margin-left: auto;
            color: var(--primary);
            font-size: 18px;
            text-decoration: none;
        }

        .section-link:hover{
            cursor: pointer;
        }

        .section-content{
            width:100%;
        }
    `

    let align;

    if(textAlign === "center"){
        align = "center";
    }else{
        align = "left";
    }

    return (
        <SectionStyled>
            <div className="section-body">
                {(title || link) && (<div className="section-header">

                    {title && (<h2 className={`section-title ${align}`}>{title}</h2>)}
                    {link && (<a href={link.href} className="section-link">{link.text}</a>)}

                </div> )}

                <div className="section-content">
                    {children}
                </div>

            </div>
        </SectionStyled>
        
    );
}
 
export default Section;