const styles = {
    backgroundColor: "var(--orange)",
    minHeight: "10vh",
}

function FooterSection() {
    return (
        <footer className="footer d-flex justify-content-center"
        style={styles}
        >
            <div className="row align-content-center text-center">
                <p className="m-auto">Gabriel Pamfil, Caroline Lane, Korrin Franklin © 2024</p>
            </div>
        </footer>
    )
}

export default FooterSection;