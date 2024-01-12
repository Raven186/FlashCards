const begin = document.querySelector('.theme-button')
console.log(begin)
if (begin) {
  begin.addEventListener('click', async (e) => {
    const { id } = e.target.dataset
    window.location.assign(`/${id}/0`)
  })
}