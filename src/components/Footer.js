const Footer = () => {
  const date = new Date();
  return(
    <footer id='main-footer' className='box popout'>
        <span>Suave International. Copyright &copy; {date.getFullYear()}. All Rights Reserved.</span>
    </footer>
  );
}

export default Footer;
