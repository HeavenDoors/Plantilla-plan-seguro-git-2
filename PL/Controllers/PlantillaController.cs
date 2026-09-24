using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PL.Controllers
{
    public class PlantillaController : Controller
    {
        // GET: PlantillaController
        public ActionResult layout()
        {
            return View();
        }
    }
}
