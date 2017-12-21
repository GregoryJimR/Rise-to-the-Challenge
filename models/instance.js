module.exports = function(sequelize, DataTypes) {
    var Instance = sequelize.define("Instance", {
        // Giving the Instance model a name of type STRING
        challenge_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        accepter_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users', //Models are plural
                key: 'id'
            },
            allowNull: true
        },
        state: {
            type: DataTypes.ENUM(
                'challenge-issued', // When the instance is first created
                'challenge-accepted', // Recipient has accepted the challenge, has not yet submitted proof.
                'challenge-rejected', // Recipient has rejected the challenge
                'provided-proof', // Recipient has submitted proof for review
                'proof-accepted', // Issuer has approved the proof
                'proof-rejected', // Issuer has rejected the proof
                'archive-success',
                'archive-fail'
            ),
            defaultValue: 'challenge-issued'
        }
    });

    // Instance.associate = function(models) {
    //Unncesary due to being the child of a many to many relationship between User & Template?

    // Instance.belongsToMany(models.User, {
    //     foreignKey: {
    //         allowNull: false
    //     }
    // });
    // Instance.belongsTo(models.Template, {
    //     foreignKey: {
    //         allowNull: false
    //     }
    // });
    // };

    return Instance;
};