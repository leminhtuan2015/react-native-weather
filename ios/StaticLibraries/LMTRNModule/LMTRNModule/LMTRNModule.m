//
//  LMTRNModule.m
//  LMTRNModule
//
//  Created by Fuji on 2/1/18.
//  Copyright © 2018 Fuji. All rights reserved.
//

#import "LMTRNModule.h"

@implementation LMTRNModule

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(squareMe:(int)number:(RCTResponseSenderBlock)callback) {
    callback(@[[NSNull null], [NSNumber numberWithInt:(number*number)]]);
}

RCT_EXPORT_METHOD(log) {
    NSLog(@"Greeting message");
}

@end
