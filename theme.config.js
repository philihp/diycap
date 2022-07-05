export default {
  github: 'https://github.com/philihp/diycap',
  docsRepositoryBase: 'https://github.com/philihp/diycap/blob/master',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Goonfleet</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        A goon's guide on building your own jump freighter
      </span>
    </>
  ),
  head: (
    <>
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="A Goon's guide to building a jump freighter in EVE Online"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: (
    <>
      MIT ©{new Date().getFullYear()}{' '}
      <a href="https://evewho.com/character/1903238489">Sir Cuddles</a>
    </>
  ),
  unstable_faviconGlyph: '🚚',
}
