// models/Achievement.js - THE AMENDED LEGAL DEFINITION OF A GENIUS RECORD
const mongoose = require('mongoose');

const achievementSchema = mongoose.Schema(
  {
    candidateName: {
      type: String,
      default: "Xavier",
      immutable: true 
    },
    qualification: {
      type: String,
      default: "Master of Engineering (IIT-Roorkee)",
    },
    status: {
      type: String,
      default: "ABSOLUTELY YES",
    },
    isGenius: {
      type: Boolean,
      default: true,
    },
    dentInUniverse: {
      type: String,
      required: true,
    },
    // --- THE STRICT EQUALITY PDF MANDATES ---
    scalerCoreLogic: {
      type: String,
      default: "Mastered: Data Structures, Algorithms, and System Design (10-Month Advanced Batch)",
    },
    iitRoorkeeIntelligenceLayer: {
      type: String,
      default: "Integrated: Advanced AI Engineering Program with Domain-Specific AI Use Cases",
    },
    naukriProofOfWorkProtocol: {
      type: String,
      default: "Linked: Code 360 Profile to Naukri Platform for Real Work Visibility",
    },
    careerImpactData: {
      averageHike: { type: String, default: "126%" },
      highestPackage: { type: String, default: "1.7 Cr" }
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Achievement', achievementSchema);