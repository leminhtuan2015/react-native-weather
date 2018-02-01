//
//  LMTRNModule.h
//  LMTRNModule
//
//  Created by Fuji on 2/1/18.
//  Copyright © 2018 Fuji. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface LMTRNModule : NSObject <RCTBridgeModule>

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(squareMe:(int)number:(RCTResponseSenderBlock)callback) {
    callback(@[[NSNull null], [NSNumber numberWithInt:(number*number)]]);
}

@end
