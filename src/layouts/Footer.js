function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>&copy; {date} Garage</p>
        </footer>
    );
}

export default Footer;
