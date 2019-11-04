module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                isEmail: true
            },
            unique: {
                args: true,
                msg: 'Email address already in use!'
            }
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
            validate: {
                len: {
                    args: 8
                }
            }
        },
        hashId: {
            type: DataTypes.STRING(128),
            allowNull: false,
            validate: {
                len: {
                    args: 8
                }
            }
        },
        userType: {
            type: DataTypes.STRING(),
            values: ['nonprofit', 'user']
        },
    });

    User.associate = function (models) {
        // Associating User with Favorites
        // When a User is deleted, also delete any favorites
        User.hasMany(models.Favorites, {
            onDelete: "cascade"
        });
    };

    return User;
};
