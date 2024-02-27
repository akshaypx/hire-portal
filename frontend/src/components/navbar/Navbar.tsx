import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Jobs
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Self Development</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Companies
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              How It Works
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
