import { IconType } from "react-icons";

type MenuItemProps = {
  item: {
    icon: IconType;
    title: string;
    action: () => boolean;
    isActive: () => boolean;
    type?: string | undefined;
  };
};

/**
 * Renders a button with an icon, title, and an optional active state.
 * @param item - An object containing the icon, title, action, and isActive properties.
 * @returns A button element with the provided icon, title, and action.
 * The button will have the `is-active` class if the isActive function returns true.
 */
const MenuItems = ({ item }: MenuItemProps) => {
  const { title, action, isActive } = item;

  const handleClick = () => {
    action();
  };

  return (
    <button
      className={` hover:bg-gray-200 p-1 rounded ${
        isActive && isActive() ? " bg-gray-300 text-gray-700 " : ""
      }`}
      onClick={handleClick}
      title={title}
    >
      {item.icon ? <item.icon /> : null}
    </button>
  );
};

export default MenuItems;
