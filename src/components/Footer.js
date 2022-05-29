const Footer = () => {
  const date = new Date();
  return(
    <footer id='main-footer' className='popout'>
        <p>Suave International. Copyright &copy; {date.getFullYear()}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
