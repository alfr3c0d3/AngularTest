using System.Web.Mvc;

namespace AngularTest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Blog()
        {
            return View("Blog");
        }

        public ActionResult Glossary()
        {
            return View("Glossary");
        }

        public ActionResult Contact()
        {
            return View("Contact");
        }
    }
}