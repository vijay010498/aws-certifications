// CFL-C01
// 40 AWS services
// Foundational Certification


// cloud computing
// server - client communication
// what is server composed of ?
  // CPU - Compute
  // RAM - Memory
  // Storage - Data
  // Database - Store data in a structured way
  // Network : Routers, switch, DNS server
  //Network - Cables, routers, servers connected with each other
  // Router: a n/2 device that forwards data packets b/t computer networks. They know where to send your packets on the internet
  // switch : Takes a packet and send it to the correct server / client on your network
// Data center

// what is cloud computing: On-demand delivery of compute power, DB, and It resources
// pay-as-you-go pricing
// right type and size of computing resources
// access as many resources almost instantly
// aws owns and maintains all hardware / sw


// types of cloud
// 1. Private Cloud - eg rackspace
// 2. Public cloud - azure, GCP, AWS
// 3. Hybrid Cloud - own servers and provider

// Five Characteristics
// On-demand self service
// Broad network access
// Multi-tenance and resource pooling - user shares resources securly
// Measured service


// 6 Advantages of Cloud Computing
// Trade Capital expense (CAPEX) for operational expense (OPEX)
// Benefit from massive economies of scale
// Stop guessing capacity
// Increase speed and agility
// Stop spending money running and maintaining data centers



// Problems solved by the cloud
// Flexibility
// Cost-effective
// Scalability
// Elasticity
// High Availability
// Agility


// Types of cloud computing
// Iaas - Infrastructure as a Service - Provide building blocks
// Paas - Platform as a Service - Removes need to manage underlying infrastructure
// Saas - Software as a Service - Completed product


// On-premises
// Applications
// Data
// Runtime
// Middleware
// O/S
// Virtualization
// Servers
// Storage
// Networking

// Iaas
// Applications
// Data
// Runtime
// Middleware
// O/S

//Paas
// Applications
// Data

// Saas - nothing

// Iaas - examples
// Ec2

// Paas
// Elastic Beanstalk
// Heroku

// Saas
// Rekognition for ML

// Pricing is very different
// Pricing is very different
// Compute - pay for compute time
// Storage - pay for data stored in the cloud

// Aws cloud history
// 2002 - internally
// 2003 - amazon infra is core strength
// 2004 - launched SQS
// 2004 - SQS, S3, EC2
// 2007 - launched in Europe

// Aws cloud use cases
// Scalable applications
// diverse set of industries
// Gaming servers

// Aws Global infrastructure

// Aws regions
// AWS availability zones
// AWS data centers
// AWS edge Locations / Points of Presence

// Aws regions
// has all around the worls
//  Names can be us-east1, eu-west-3...
// A region is a cluster of data centers
// Aws services are region-scoped

// how to choose AWS region ?

// Compliance
// Proximity
// Available Services
// Pricing

// Aws availability zones
  // Each region has many availability zones - usually 3 , min is 3, max is 6
  // Example : AWS region - sydney: ap-southeast-2 :
                                      // ap-southeast-2a, ap-southeast-2b, ap-southeast-2c
// Each Availability zone (AZ) is one or more discrete data centers with redundant power, networking and connectivity
// Each AZ is seperate from each other, isolated from disasters

// AWS Points of Presence (Edge Locations)
// 400+ Points of Presence , 90+cities , 40+countries
// Content is delivered to end users with lower latency


// Shared responsibility Model Diagram
// Customer = Responsibility for the security in the cloud

// AWS - responsibility for the Security of the cloud



// IAM : Users and Groups

// IAM = identity and Access Management Global Service
// Root account created by default
// Users are people within your organization and can be grouped

// Group only contains users not groups
// Eg: Group: Developers


// IAM: Permission
// Users or Groups can be assigned JSON documents called Policies
// AWS - we apply the least privilege principle, don't give more permission than a user needs
