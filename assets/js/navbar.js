let menu = document.getElementById('navbar')
menu.addEventListener('show.bs.collapse', function () {
  let banner = document.getElementById('banner')
  banner.style.transform = "translate(-50%, 10%)"
});

menu.addEventListener('hide.bs.collapse', function () {
  let banner = document.getElementById('banner')
  banner.style.transform = "translate(-50%, -50%)"
})