using System.Web;
using System.Web.Optimization;

namespace AngularTest
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.

            bundles.Add(new ScriptBundle("~/ScriptsBundle")
                .Include(
                        "~/toolsScripts/modernizr-*",
                        "~/toolsScripts/bootstrap.js",
                        "~/toolsScripts/respond.js",
                        "~/toolsScripts/jquery-{version}.js",
                        "~/toolsScripts/jquery.validate*",
                        "~/toolsScripts/angular.min.js",
                        "~/toolsScripts/angular-sanitize.min.js",
                        "~/toolsScripts/angular-ui-router.min.js",
                        "~/toolsScripts/ui-bootstrap-tpls.min.js",
                        "~/toolsScripts/ng-infinite-scroll.min.js"
                        )
                .IncludeDirectory("~/appScripts", "*.module.js", true)
                .IncludeDirectory("~/appScripts/core", "*.js", true)
                .IncludeDirectory("~/appScripts", "*.js", true)
                        );

            bundles.Add(new StyleBundle("~/CSSBundle")
                .Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/toolsScripts/salesforce-lightning-design-system/assets/styles/salesforce-lightning-design-system.css"

                      ));
        }
    }
}
