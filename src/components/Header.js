const Header = ({ username }) => {
  const formatUsername = username => {
    return /[aeiouy]/i.test(username[0]) ? `d'${ username }` : `de ${ username }`;
  }

  return (
    <header>
      <h1>La boite à recettes { formatUsername(username) }</h1>
    </header>
  )
}

export default Header;
