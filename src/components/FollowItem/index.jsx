import PropTypes from "prop-types";
import { getAvatar } from "../../utils/generate";

export function FollowItem({ name, username }) {  // Desestruturar props
  const avatar = getAvatar(
    `${name + Math.floor(Math.random() * 1000)}@email.com`
  );

  return (
    <div className="flex items-center justify-between py-3 hover:bg-gray-800 transition duration-200">
      <div className="flex items-center">
        <img
          src={avatar}
          alt="user avatar"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">{username}</p>
        </div>
      </div>
      <div>
        <button className="bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-white transition duration-200">
          Follow
        </button>
      </div>
    </div>
  );
}

FollowItem.propTypes = {  // Correção aqui
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
