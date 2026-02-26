import "../styles/Header.css"

function Header({title}) {

    return (
        <>
            <div className="form-header">
                
                <h4 className="form-title">{title}</h4>
            </div>

            <p className="note">Note: All fields marked * are mandatory.</p>

        </>
    )
}

export default Header;